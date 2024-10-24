"use client";
import { useEffect, useState } from "react";
import Spinner from "../Spinner";
import { useTranslations } from "next-intl";
import MyTaskCard from "./MyTaskCard";

const MyTasksSection = () => {
    const t = useTranslations("Application.AvailableTasks");
    const [isLoading,setIsLoading] = useState(false);
    const [tasks, setTasks] = useState([
        {
            "id":1,
            "type": "cleaning",
            "name": "clean my apartment",
            "completionDate": "8/9/2024",
            "price": "200",
            "location": "Gaza",
            "receiptConfirmed": true,
            "chatId": "1"
        },
        {
            "id":2,
            "type": "emptyCar",
            "name": "clean my apartment",
            "completionDate": "8/9/2024",
            "price": "200",
            "location": "Gaza",
            "toLocation": "Aleppo",
            "receiptConfirmed": true,
            "chatId": "2"
        },
        {
            "id":3,
            "type": "transfer",
            "name": "clean my apartment",
            "completionDate": "8/9/2024",
            "price": "200",
            "location": "Gaza",
            "toLocation": "Aleppo",
            "receiptConfirmed": false,
            "chatId": "3"
        },
        {
            "id":4,
            "type": "warehousing",
            "name": "clean my apartment",
            "completionDate": "8/9/2024",
            "price": "200",
            "location": "Gaza",
            "receiptConfirmed": false,
            "chatId": "4"
        }
      ]);
      useEffect(() => {
        const fetchTasks = async () => {
          try {
            setIsLoading(true);
            const response = await fetch("YOUR_API_ENDPOINT"); // Replace with your API endpoint
            const data = await response.json();
            setTasks(data); // Assuming the data is an array of objects with {imagePath, link}
          } catch (error) {
            console.error("Error fetching ads:", error);
          } finally {
            setIsLoading(false)
          }
        };
    
        // fetchTasks(); // Uncomment this line to fetch real data from your API
      }, []);
  return (
    <>
    <section className="pt-24">
        <div className="content flex flex-col justify-start items-center gap-4">
            {isLoading ? (
                <Spinner/>
            ) : (
                tasks.length > 0 ? (
                    tasks.map((task) => (
                        <MyTaskCard key={task.id} task={task}/>
                    ))
                ) : (
                <p className="w-full text-center">{t("NoTasks")}</p>
                )
            )}
        </div>
    </section>
</>
  )
}

export default MyTasksSection