import { Button, Form, Input, type FormProps } from "antd";
import { createContext, memo, useMemo } from "react";
import { useLogin } from "./services/useLogin";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "./features/tokenSlice";
import Title from "antd/es/typography/Title";
import useNotification from "antd/es/notification/useNotification";

type FieldType = {
  phone?: string;
  password?: string;
};

const Context = createContext({ name: "Default" });

const Login = () => {
  const { adminLogin } = useLogin();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [api, contextHolder] = useNotification();
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    adminLogin.mutate(values, {
      onSuccess: (res) => {
        dispatch(setToken(res?.AcsesToken));
        navigate("/");
      },
      onError: (err: any) => {
        const status_code = err?.response?.data?.status_code || 500;

        let userMessage =
          "Noma'lum xatolik yuz berdi. Iltimos, keyinroq urinib ko‘ring.";

        if (status_code === 400) {
          userMessage =
            "Kiritilgan ma'lumotlar noto‘g‘ri. Iltimos, tekshirib qaytadan urinib ko‘ring.";
        } else if (status_code === 422) {
          userMessage =
            "Login yoki parol noto‘g‘ri. Iltimos, qayta urinib ko‘ring.";
        } else if (status_code === 403) {
          userMessage = "Sizda ushbu amalni bajarishga ruxsat yo‘q.";
        } else if (status_code === 404) {
          userMessage =
            "Server topilmadi. Iltimos, internet aloqangizni tekshirib ko‘ring.";
        } else if (status_code === 500) {
          userMessage = "Serverda muammo yuz berdi. Keyinroq urinib ko‘ring.";
        }

        api.error({
          message: "Xatolik yuz berdi!",
          description: userMessage,
          placement: "topRight",
        });
      },
    });
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  const contextValue = useMemo(() => ({ name: "Ant Design" }), []);
  return (
    <Context.Provider value={contextValue}>
      {contextHolder}
      <div className="flex h-screen justify-center items-center bg-gray-100 px-4">
        <div className="w-[430px] p-10 shadow-xl bg-white rounded-lg">
          <Title level={3} className="text-center mb-7!">
            Admin Login
          </Title>

          <Form
            name="login"
            layout="vertical"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item<FieldType>
              name="phone"
              rules={[
                { required: true, message: "Please enter your phone number" },
              ]}
            >
              <Input
                placeholder="Enter your phone number"
                className="h-[40px]!"
              />
            </Form.Item>

            <Form.Item<FieldType>
              name="password"
              rules={[
                { required: true, message: "Please enter your password" },
              ]}
            >
              <Input.Password
                placeholder="Enter your password"
                className="h-[40px]!"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full transition-all duration-200 hover:opacity-90"
                loading={adminLogin.isPending}
                disabled={adminLogin.isPending}
              >
                Log In
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Context.Provider>
  );
};

export default memo(Login);
