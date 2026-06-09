import Template1 from "./templates/Template1";
import Template2 from "./templates/Template2";
import Template3 from "./templates/Template3";

export default function BiodataPreview(props) {

    switch (props.template) {

        case "1":
            return <Template1 {...props} />;

        case "2":
            return <Template2 {...props} />;

        case "3":
            return <Template3 {...props} />;

        default:
            return <></>;
    }
}