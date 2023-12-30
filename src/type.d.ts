type Form = {
    name: string,
    email: string,
    phoneNumber: string,
    plan: PlanOptions,
    planBillingFrequency: BillFrequency,
    addOns: AddOns
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

type DataFeed = {
    plan: {
        MONTHLY: PlanFeed,
        YEARLY: PlanFeed,
    },
    addOns: {
        MONTHLY: AddonsFeed,
        YEARLY: AddonsFeed,
    }
}

const dataFeed: DataFeed = {
    plan: {
        MONTHLY: {
            ARCADE: {
                title: "",
                subtitle: "",
                price: 9,
                priceText: "$9/mo"
            },
            ADVANCED: {
                title: "",
                subtitle: "",
                price: 12,
                priceText: "$12/mo"
            },
            PRO: {
                title: "",
                subtitle: "",
                price: 15,
                priceText: "$15/mo"
            }
        },
        YEARLY: {
            ARCADE: {
                title: "",
                subtitle: "",
                price: 90,
                priceText: "$90/yr"
            },
            ADVANCED: {
                title: "",
                subtitle: "",
                price: 120,
                priceText: "$120/yr"
            },
            PRO: {
                title: "",
                subtitle: "",
                price: 150,
                priceText: "$150/yr"
            }
        }
    },
    addOns: {
        MONTHLY: {
           ONLINE_SERVICE: {
                title: "Online service",
                subtitle: "Access to multiplayer games",
                price: 1,
                priceText: "+$1/mo",
           }, 
           LARGE_STORAGE: {
                title: "Online service",
                subtitle: "Access to multiplayer games",
                price: 1,
                priceText: "+$1/mo",
           }, 
           CUSTOM_PROFILE: {
                title: "Online service",
                subtitle: "Access to multiplayer games",
                price: 1,
                priceText: "+$1/mo",
           }, 
        },
        YEARLY: {
           ONLINE_SERVICE: {
                title: "Online service",
                subtitle: "Access to multiplayer games",
                price: 1,
                priceText: "+$1/mo",
           }, 
           LARGE_STORAGE: {
                title: "Online service",
                subtitle: "Access to multiplayer games",
                price: 1,
                priceText: "+$1/mo",
           }, 
           CUSTOM_PROFILE: {
                title: "Online service",
                subtitle: "Access to multiplayer games",
                price: 1,
                priceText: "+$1/mo",
           }, 
        }
    }

}

