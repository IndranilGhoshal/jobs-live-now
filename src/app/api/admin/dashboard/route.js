import { JobSchema } from "@/app/model/Job";

export async function POST(request) {

    try {

        let topoloneform = await JobSchema.find({ category: { $in: ['Jobs'] } , status: { $in: ['0'] } })
        let admitcard = await JobSchema.find({ category: { $in: ['Admit Card'] } , status: { $in: ['0'] } })
        let results = await JobSchema.find({ category: { $in: ['Results'] } , status: { $in: ['0'] } })
        let answerkey = await JobSchema.find({ category: { $in: ['Answer Key'] } , status: { $in: ['0'] } })
        let sullabus = await JobSchema.find({ category: { $in: ['Syllabus'] } , status: { $in: ['0'] } })
        let admissionform = await JobSchema.find({ category: { $in: ['Admission Form'] } , status: { $in: ['0'] } })

        const datas = [
            { name: "Top Online Form", value: topoloneform.length>0?topoloneform.length:"00", icon: "📝" },
            { name: "Admit Card", value: admitcard.length>0?admitcard.length:"00", icon: "🎫" },
            { name: "Results", value: results.length>0?results.length:"00", icon: "🏆" },
            { name: "Answer Key", value: answerkey.length>0?answerkey.length:"00", icon: "🔑" },
            { name: "Syllabus", value: sullabus.length>0?sullabus.length:"00", icon: "📚" },
            { name: "Admission Form", value: admissionform.length>0?admissionform.length:"00", icon: "🎓" },
        ];

        return new Response(
            JSON.stringify({
                success: true,
                message: "Fetched successfully",
                data: datas
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