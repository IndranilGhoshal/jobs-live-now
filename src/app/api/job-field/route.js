
export async function GET(request) {

    try {

        const fields = [
            { fieldName: "Job Advertisement Title", fieldType: "text", value: "", isMandotary: true, icon: "💼", placeholder: "Job Title", selectvalue: [] },
            { fieldName: "Organisation Name", fieldType: "text", value: "", isMandotary: true, icon: "🏢", placeholder: "Organisation Name", selectvalue: [] },
            { fieldName: "Job Advertisement Number", fieldType: "text", value: "", isMandotary: false, icon: "💼", placeholder: "Job Title", selectvalue: [] },
            { fieldName: "Job Type", fieldType: "singleselect", value: [], isMandotary: true, icon: "💼", placeholder: "", selectvalue: [{ name: "Government Job" }, { name: "UPSC Job" }, { name: "SSC Job" }, { name: "Bank Job" }, { name: "Railway Job" }, { name: "Defence Job" }, { name: "Teaching Job" }, { name: "Contractual Job" }] },
            { fieldName: "Application Date", fieldType: "daterange", value: { start: "", end: "" }, isMandotary: true, icon: "📅", placeholder: "", selectvalue: [] },
            { fieldName: "Qualification Allow", fieldType: "multiselect", value: [], isMandotary: true, icon: "💼", placeholder: "", selectvalue: [{ name: "10th Pass" }, { name: "ITI Pass" }, { name: "Diploma Pass" }, { name: "12th Pass" }, { name: "Graduation Pass" }, { name: "Post-Graduation Pass" }, { name: "Phd Pass" }] },
            { fieldName: "Tags", fieldType: "multiselect", value: [], isMandotary: true, icon: "🏷️", placeholder: "", selectvalue: [{ name: "10th" }, { name: "ITI" }, { name: "Diploma" }, { name: "12th" }, { name: "Graduation" }, { name: "Post-Graduation" }, { name: "Phd" }] },
            { fieldName: "Short Information", fieldType: "texteditor", value: "", isMandotary: true, icon: "ℹ️", placeholder: "Enter Short Information", selectvalue: [] },
            { fieldName: "Important Dates", fieldType: "texteditor", value: "", isMandotary: true, icon: "📅", placeholder: "Enter Important Dates", selectvalue: [] },
            { fieldName: "Application Fee", fieldType: "texteditor", value: "", isMandotary: true, icon: "💰", placeholder: "Enter Application Fee", selectvalue: [] },
            { fieldName: "Age Limit", fieldType: "texteditor", value: "", isMandotary: true, icon: "🎯", placeholder: "Enter Age Limit", selectvalue: [] },
            { fieldName: "Vacancy Details", fieldType: "texteditor", value: "", isMandotary: true, icon: "📊", placeholder: "Enter Vacancy Details", selectvalue: [] },
            { fieldName: "Educational Qualification", fieldType: "texteditor", value: "", isMandotary: true, icon: "🎓", placeholder: "Enter Educational Qualification Details", selectvalue: [] },
            { fieldName: "How To Apply", fieldType: "texteditor", value: "", isMandotary: true, icon: "🔗", placeholder: "Enter How To Apply", selectvalue: [] },
            { fieldName: "Mode of Selection", fieldType: "texteditor", value: "", isMandotary: true, icon: "📝", placeholder: "Enter Mode of Selection", selectvalue: [] },
            { fieldName: "Important Links", fieldType: "texteditor", value: "", isMandotary: true, icon: "🔗", placeholder: "Enter Important Links", selectvalue: [] },
            { fieldName: "Important Question", fieldType: "texteditor", value: "", isMandotary: true, icon: "❓", placeholder: "Enter Important Question", selectvalue: [] },
            { fieldName: "Apply Online Link", fieldType: "text", value: "", isMandotary: true, icon: "📝", placeholder: "Apply Online Link", selectvalue: [] },
            { fieldName: "Notification PDF", fieldType: "text", value: "", isMandotary: true, icon: "📄", placeholder: "Notification PDF Link", selectvalue: [] },
            { fieldName: "Official Website", fieldType: "text", value: "", isMandotary: true, icon: "🌐", placeholder: "Official Website", selectvalue: [] },
            { fieldName: "Post Name", fieldType: "text", value: "", isMandotary: true, icon: "💼", placeholder: "Post Name", selectvalue: [] },
            { fieldName: "Job Location", fieldType: "text", value: "", isMandotary: true, icon: "📍", placeholder: "Job Location", selectvalue: [] },
            { fieldName: "Application Mode", fieldType: "text", value: "", isMandotary: true, icon: "🖥️", placeholder: "Application Mode", selectvalue: [] },
            { fieldName: "Salary", fieldType: "text", value: "", isMandotary: true, icon: "💰", placeholder: "Salary", selectvalue: [] },
            { fieldName: "Recruitment Overview", fieldType: "texteditor", value: "", isMandotary: true, icon: "📋", placeholder: "Enter Recruitment Overview", selectvalue: [] }
        ];

        return new Response(
            JSON.stringify({
                success: true,
                message: "Fields fetched successfully",
                data: fields
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