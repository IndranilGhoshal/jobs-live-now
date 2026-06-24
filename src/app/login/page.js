import Login from "../_component/Login";
export const metadata = {
  title: "Admin Login",
  description: "Restricted administrator login area.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};
export default function LoginPage() {
    return (
        <Login />
    );
}