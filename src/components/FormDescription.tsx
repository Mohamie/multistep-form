import "../css/FormDescription.scss"

type FormDescriptionProps = {
    description: Description
}

export default function FormDescription(props: FormDescriptionProps){
    const { title, subtitle } = props.description;
   
   return <>
        <div className="form__description">
            <h1 className="title">{title}</h1>
            <h2 className="subtitle">{subtitle}</h2>
        </div>
    </>
}