import React from "react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Free",
    description:
      "Get all goodies for free, no credit card required. Start your journey to the moon!",
    price: "$0/month",
    features: [
      "Access to all basic features",
      "Watch up to 5 stocks",
      "Get 15min delayed data",
    ],
    buttonText: "Already signed up",
  },
  {
    name: "Pro",
    description:
      "Get more features with Pro. Put yourself one step closer to the moon!",
    price: "$3.99/month",
    features: [
      "All in the free plan plus",
      "Watch unlimted stocks",
      "Get instant data",
      "Participate in the leaderboard",
      "Extra 5,000 coins at start of month",
    ],
    buttonText: "Get started",
  },
  {
    name: "Exclusive",
    description:
      "Set yourself up with the best in the industry. One way trip to the moon!",
    price: "$14.99/month",
    features: [
      "All in the pro plan plus",
      "Priority support",
      "Enterprise-grade security",
      "Extra 10,000 coins at start of month",
    ],
    buttonText: "Get started",
  },
];

export const PlanDetails = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Subscription Plans
      </h1>
      <p className="text-xl text-center mb-12">
        We want to help you but we need your help too.<br></br>Get started with
        paid monthly subscriptions for more features and access to the monthly
        leaderboard!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div key={index} className="border rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>
            <p className="text-gray-600 mb-4">{plan.description}</p>
            <div className="text-4xl font-bold mb-4">{plan.price}</div>
            <Button variant="outline" className="w-full mb-4">
              {plan.buttonText}
            </Button>
            <ul className="space-y-2">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

// ("use client");
// import React from "react";
// import {
//   Table,
//   TableHeader,
//   TableBody,
//   TableRow,
//   TableHead,
//   TableCell,
//   TableCaption,
// } from "@/components/ui/table";
// import { Button } from "@/components/ui/button";

// const plans = [
//   {
//     name: "Free",
//     price: "$0",
//     features: ["Basic access", "Limited features", "Community support"],
//   },
//   {
//     name: "Monthly",
//     price: "$9.99/month",
//     features: [
//       "Full access",
//       "All features",
//       "Priority support",
//       "Monthly updates",
//     ],
//   },
//   {
//     name: "Yearly",
//     price: "$99.99/year",
//     features: [
//       "Full access",
//       "All features",
//       "Priority support",
//       "Monthly updates",
//       "Annual discount",
//     ],
//   },
// ];

// export const PlanDetails = () => {
//   return (
//     <div className="container mx-auto py-8">
//       <h1 className="text-3xl font-bold mb-8">Subscription Plans</h1>
//       <Table>
//         <TableCaption>Choose the plan that suits your needs</TableCaption>
//         <TableHeader>
//           <TableRow>
//             <TableHead className="w-1/4">Plan</TableHead>
//             <TableHead>Price</TableHead>
//             <TableHead>Features</TableHead>
//             <TableHead className="text-right">Actions</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {plans.map((plan, index) => (
//             <TableRow key={index}>
//               <TableCell className="font-medium">{plan.name}</TableCell>
//               <TableCell>{plan.price}</TableCell>
//               <TableCell>
//                 <ul className="list-disc pl-4">
//                   {plan.features.map((feature, index) => (
//                     <li key={index}>{feature}</li>
//                   ))}
//                 </ul>
//               </TableCell>
//               <TableCell className="text-right">
//                 <Button>Subscribe</Button>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </div>
//   );
// };
