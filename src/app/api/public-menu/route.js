
export async function GET(request) {

    try {

        const menus = [
            { menu: "Home", path: "/", icon: "🏠" },
            { menu: "Admit Card", path: "/category/admit-card", icon: "🎫" },
            { menu: "Results", path: "/category/results", icon: "🏆" },
            { menu: "Answer Key", path: "/category/answer-key", icon: "📚" },
            { menu: "Syllabus", path: "/category/syllabus", icon: "🔑" },
            { menu: "Admission Form", path: "/category/admission-form", icon: "🎓" },
            { menu: "Online Tools", path: "/tools", icon: "🛠️" },
        ];

        return new Response(
            JSON.stringify({
                success: true,
                message: "Menus fetched successfully",
                data: menus
            }),
            {
                status: 200,
                headers: {
                    "Content-Type": "application/json",
                    "Cache-Control": "no-store", // 🔥 always fresh data
                }
            }
        );

    } catch (error) {

        return new Response(
            JSON.stringify({
                success: false,
                message: "Something went wrong",
                error: error.message
            }),
            {
                status: 500,
                headers: {
                    "Content-Type": "application/json",
                }
            }
        );
    }
}