import jwt from "jsonwebtoken";

export async function POST(req) {

    const { email, password } = await req.json();

    // ✅ Demo user (later DB use korba)
    if (email !== "admin@gmail.com" || password !== "123456") {
        return Response.json({ error: "Invalid credentials" }, { status: 401 });
    }

    // 🔐 Create Token
    const token = jwt.sign(
        { email },
        "MY_SECRET_KEY",  // 🔥 change in production
        { expiresIn: "1h" }
    );

    return Response.json({ token });
}