import {Button} from "@heroui/react";

export default function Home({ user }) {
    return (
        <div className="p-6">
            <h1 className="text-2xl">Welcome, {user} 👋</h1>
            <Button color="primary">Button</Button>
        </div>
    )
}
