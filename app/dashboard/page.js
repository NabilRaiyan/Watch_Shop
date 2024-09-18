import Dashboard from "@/components/Dashboard";
import Main from "@/components/Main";

export const metadata = {
    title: "Moodly || Dashboard",
    description: "Track your mental health",
  };


export default function DashboardPage(){
    const isAuthenticated = false;
    const children = (
        <Dashboard />
    )

    return (
        <Main></Main>
    )
}