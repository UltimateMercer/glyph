// "use client";
// import { Card, CardHeader } from "@/components/ui/card";
// import Image from "next/image";

// export const PersonCard = ({ person }) => {
//   return (
//     <Card
//       className="group cursor-pointer border-blue-900/50 bg-blue-950/20 backdrop-blur-sm transition-all duration-200 hover:border-blue-700/50 hover:bg-blue-950/30"
//       // onClick={() => handlePersonClick(person)}
//     >
//       <CardHeader className="relative overflow-hidden pb-0">
//         <div className="relative h-48 -mx-6 -mt-6 mb-4">
//           <Image
//             src={getPersonImage(person) || "/placeholder.svg"}
//             alt={person.name}
//             fill
//             className="object-cover transition-transform duration-300 group-hover:scale-105"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/50 to-transparent" />

//           {/* Portrait Count Indicator */}
//           {person.portraits && person.portraits.length > 1 && (
//             <div className="absolute top-2 left-2 bg-blue-950/80 rounded-full px-2 py-1 flex items-center space-x-1">
//               <ImageIcon className="h-3 w-3 text-cyan-400" />
//               <span className="text-xs text-blue-100">
//                 {person.portraits.length}
//               </span>
//             </div>
//           )}
//         </div>
//         <div className="flex items-start justify-between">
//           <div className="space-y-2">
//             <CardTitle className="text-blue-100 group-hover:text-cyan-400 transition-colors">
//               {person.name}
//             </CardTitle>
//             <div className="flex flex-wrap gap-2">
//               <Badge
//                 variant="outline"
//                 className="border-blue-700 bg-blue-900/50 text-blue-300"
//               >
//                 {person.species}
//               </Badge>
//               <Badge
//                 variant="outline"
//                 className="border-blue-700 bg-blue-900/50 text-blue-300"
//               >
//                 {person.affiliation}
//               </Badge>
//             </div>
//           </div>
//           {person.threatLevel && (
//             <Badge className={getThreatLevelColor(person.threatLevel)}>
//               {person.threatLevel === "Allied" ? (
//                 <Star className="mr-1 h-3 w-3" />
//               ) : (
//                 <AlertTriangle className="mr-1 h-3 w-3" />
//               )}
//               {person.threatLevel}
//             </Badge>
//           )}
//         </div>
//         <CardDescription className="text-blue-300 line-clamp-2">
//           {person.description}
//         </CardDescription>
//       </CardHeader>
//       <CardContent className="space-y-4">
//         <div className="grid gap-3 text-sm">
//           <div className="flex items-center justify-between">
//             <span className="text-blue-400">Origin:</span>
//             <span className="text-blue-300">{person.origin}</span>
//           </div>
//           <div className="flex items-center justify-between">
//             <span className="text-blue-400">Status:</span>
//             <span className="text-blue-300">{person.status}</span>
//           </div>
//         </div>

//         {person.portraits && person.portraits.length > 0 && (
//           <div className="space-y-2">
//             <div className="flex items-center space-x-2">
//               <ImageIcon className="h-4 w-4 text-cyan-400" />
//               <span className="text-sm font-medium text-blue-100">
//                 Portrait Gallery
//               </span>
//             </div>
//             <div className="text-xs text-blue-400">
//               {person.portraits.length} portrait
//               {person.portraits.length !== 1 ? "s" : ""} available
//             </div>
//           </div>
//         )}

//         {person.notableAchievements &&
//           person.notableAchievements.length > 0 && (
//             <div className="space-y-2">
//               <div className="flex items-center space-x-2">
//                 <Star className="h-4 w-4 text-cyan-400" />
//                 <span className="text-sm font-medium text-blue-100">
//                   Notable Achievements
//                 </span>
//               </div>
//               <div className="text-xs text-blue-400">
//                 {person.notableAchievements.length} achievement
//                 {person.notableAchievements.length !== 1 ? "s" : ""} recorded
//               </div>
//             </div>
//           )}

//         {person.classifiedInfo && (
//           <div className="rounded border border-red-800/50 bg-red-950/20 p-2">
//             <div className="flex items-center space-x-2">
//               <AlertTriangle className="h-4 w-4 text-red-400" />
//               <span className="text-xs font-medium text-red-400">
//                 Classified Information Available
//               </span>
//             </div>
//           </div>
//         )}
//       </CardContent>
//     </Card>
//   );
// };
