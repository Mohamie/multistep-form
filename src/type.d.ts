type Form = {
    name: string,
    email: string,
    phoneNumber: string,
    plan: PlanOptions,
    planBillingFrequency: BillFrequency,
    addOns: Array<AddOnType>
}

type FormActionType = "NAME" | "EMAIL" | "PHONE" | "PLAN" | "BILL_FREQUENCY" | "ADDONS"

type FormAction = {
    type: FormActionType,
    value: any
}

enum Step {
    "STEP_ONE" = 1, 
    "STEP_TWO" = 2,
    "STEP_THREE" = 3,
    "STEP_FOUR" = 4
}


type AddOns = {
    title: string,
    subtitle: string,
    price: number,
}

type PlanOptions = "ARCADE" | "ADVANCED" | "PRO";

type BillFrequency = "MONTHLY" | "YEARLY";

type AddOnType = "ONLINE_SERVICE" | "LARGE_STORAGE" | "CUSTOM_PROFILE";

type OptionFeed = {
    title: string,
    subtitle: string,
    price: number,
    priceText: string
}

type PlanFeed = {
    ARCADE: OptionFeed,
    ADVANCED: OptionFeed,
    PRO: OptionFeed
}

type AddonsFeed = {
    ONLINE_SERVICE: OptionFeed,
    LARGE_STORAGE: OptionFeed,
    CUSTOM_PROFILE: OptionFeed
}

type Description = {
    title: string,
    subtitle: string,
}

type DataFeed = {
    descriptions: Array<Description>,
    plan: {
        MONTHLY: PlanFeed,
        YEARLY: PlanFeed,
    },
    addOns: {
        MONTHLY: AddonsFeed,
        YEARLY: AddonsFeed,
    }
}

