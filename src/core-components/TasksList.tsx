import { Button } from "../components/Button";
import { TaskItem } from "./TaskItem";
import PlusIcon from '../assets/icons/plus.svg?react'

export function TasksList() {
    return (
        <>
            <section>
                <Button icon={PlusIcon} className="w-full">Nova tarefa</Button>
            </section>
            <section className="space-y-2">
                <TaskItem />
                <TaskItem />
                <TaskItem />
                <TaskItem />
            </section>
        </>
    )
}