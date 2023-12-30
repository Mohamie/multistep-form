import "../../css/PlanInput.scss"
import ArcadeIcon from "../../assets/images/icon-arcade.svg"
import AdvancedIcon from "../../assets/images/icon-advanced.svg"
import ProIcon from "../../assets/images/icon-pro.svg"

export default function PlanInputs(){
    return  <div className="form__plans">
      <div className="--plan">
        <input type="radio" id="arcade" name="plan" defaultChecked/>
        <img src={ArcadeIcon} alt="" />
        <label htmlFor="arcade">Arcade <span className="price">$9/mo</span></label>
      </div>
      
      <div className="--plan">
        <input type="radio" id="advanced" name="plan" />
        <img src={AdvancedIcon} alt="" />
        <label htmlFor="advanced">Advanced <span className="price">$12/mo</span></label>
      </div>
    
      <div className="--plan">
        <input type="radio" id="pro" name="plan" />
        <img src={ProIcon} alt="" />
        <label htmlFor="pro">Pro <span className="price">$15/mo</span></label>
      </div>

      <div className="--bill_frequency">
        <input type="radio" id="monthly" name="billFrequency" />
        <label htmlFor="monthly">Monthly</label>
        
        {/* TODO: toggle the radios on toggle click */}
        <div className="toggle"></div>

        <input type="radio" id="yearly" name="billFrequency" />
        <label htmlFor="yearly">Yearly</label>
      </div>
  </div>
}