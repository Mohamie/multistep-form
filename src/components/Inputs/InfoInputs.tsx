import '../../css/InfoInput.scss'

export default function PersonalInfoInput(){
    return <div className="form__personal-info">
        <div className="--text-input">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="e.g Stephen King"/>
        </div>
        
        <div className="--text-input">
            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" placeholder="e.g stephenking@lorem.com"/>
        </div>

        <div className="--text-input">
            <label htmlFor="phone">Phone Number</label>
            <input id="phone" type="number" placeholder="e.g + 1 234 567 890"/>
        </div>
    </div>
}