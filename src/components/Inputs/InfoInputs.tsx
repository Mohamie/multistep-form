import '../../css/InfoInput.scss'

type InfoInputProps = {
    name: string,
    email: string,
    phone: string,
    updateInfoForm: (action: FormAction) => void
}

export default function PersonalInfoInput(props: InfoInputProps){
    const { name, email, phone, updateInfoForm } = props;

    function onInfoFormUpdate(type: FormActionType, value: string){
        updateInfoForm({type, value});
    }

    return <div className="form__personal-info">
        <div className="--text-input">
            <label htmlFor="name">Name</label>
            <input 
                id="name" 
                type="text" 
                placeholder="e.g Stephen King"
                value={name} 
                onChange={(event) => onInfoFormUpdate("NAME", event.currentTarget.value)}
            />
        </div>
        
        <div className="--text-input">
            <label htmlFor="email">Email Address</label>
            <input 
                id="email" 
                type="email" 
                placeholder="e.g stephenking@lorem.com"
                value={email} 
                onChange={(event) => onInfoFormUpdate("EMAIL", event.currentTarget.value)}
            />
        </div>

        <div className="--text-input">
            <label htmlFor="phone">Phone Number</label>
            <input 
                id="phone" 
                type="number" 
                placeholder="e.g + 1 234 567 890"
                value={phone} 
                onChange={(event) => onInfoFormUpdate("PHONE", event.currentTarget.value)}
            />
        </div>
    </div>
}