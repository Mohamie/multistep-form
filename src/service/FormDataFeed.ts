export function getFormDataFeed(): DataFeed{
    return {
        descriptions: [
            {
                title: "Personal info",
                subtitle: "Please provide your name, email address, and phone number."
            },
            {
                title: "Select your plan",
                subtitle: "You have the option of monthly or yearly billing."
            },
            {
                title: "Pick add-ons",
                subtitle: "Add-ons help enhanced your gaming experience"
            },
            {
                title: "Finish up",
                subtitle: "Double-check everything looks OK before confirming."
            },
        ],
        plan: {
            MONTHLY: {
                ARCADE: {
                    title: "Arcade",
                    subtitle: "",
                    price: 9,
                    priceText: "$9/mo"
                },
                ADVANCED: {
                    title: "Advanced",
                    subtitle: "",
                    price: 12,
                    priceText: "$12/mo"
                },
                PRO: {
                    title: "Pro",
                    subtitle: "",
                    price: 15,
                    priceText: "$15/mo"
                }
            },
            YEARLY: {
                ARCADE: {
                    title: "Arcade",
                    subtitle: "2 months free",
                    price: 90,
                    priceText: "$90/yr"
                },
                ADVANCED: {
                    title: "Advanced",
                    subtitle: "2 months free",
                    price: 120,
                    priceText: "$120/yr"
                },
                PRO: {
                    title: "Pro",
                    subtitle: "2 months free",
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
                    title: "Larger storage",
                    subtitle: "Extra 1TB of cloud save",
                    price: 2,
                    priceText: "+$2/mo",
               }, 
               CUSTOM_PROFILE: {
                    title: "Customizable profile",
                    subtitle: "Custom theme on your profile",
                    price: 2,
                    priceText: "+$2/mo",
               }, 
            },
            YEARLY: {
                ONLINE_SERVICE: {
                    title: "Online service",
                    subtitle: "Access to multiplayer games",
                    price: 10,
                    priceText: "+$10/yr",
               }, 
               LARGE_STORAGE: {
                    title: "Larger storage",
                    subtitle: "Extra 1TB of cloud save",
                    price: 20,
                    priceText: "+$20/yr",
               }, 
               CUSTOM_PROFILE: {
                    title: "Customizable profile",
                    subtitle: "Custom theme on your profile",
                    price: 20,
                    priceText: "+$20/yr",
               }, 
            }
        }
    
    }
}