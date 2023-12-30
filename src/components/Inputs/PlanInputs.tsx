export default function PlanInputs(){
    return  <div className="form__plans">
      <div className="--plan">
        <input type="radio" id="arcade" name="plan" />
        <label htmlFor="arcade">Arcade</label>
      </div>
      
      <div className="--plan">
        <input type="radio" id="advanced" name="plan" />
        <label htmlFor="advanced">Advanced</label>
      </div>
    
      <div className="--plan">
        <input type="radio" id="pro" name="plan" />
        <label htmlFor="pro">Pro</label>
      </div>

      <div className="--bill_frequency">
        <input type="radio" id="monthly" name="billFrequency" />
        <label htmlFor="monthly">Monthly</label>
        
        <input type="radio" id="yearly" name="billFrequency" />
        <label htmlFor="yearly">Yearly</label>
      </div>
  </div>
}