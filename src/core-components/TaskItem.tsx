import { ButtonIcon } from "../components/ButtonIcon";
import { Card } from "../components/Card";
import { InputCheckbox } from "../components/InputCheckbox";
import { Text } from "../components/Text";
import TrashIcon from '../assets/icons/trash.svg?react'
import PencilIcon from '../assets/icons/pencil.svg?react'
import XIcon from '../assets/icons/x.svg?react'
import CheckIcon from "../assets/icons/check.svg?react"
import { useState, type ChangeEvent, type FormEvent } from "react";
import { InputText } from "../components/InputText";
import { TaskState, type Task } from "../models/task";
import { cx } from "class-variance-authority";
import { useTask } from "../hooks/useTask";

interface Props {
    task: Task;
}

export function TaskItem({ task }: Props) {
    const [isEditing, setIsEditing] = useState(task?.state === TaskState.Creating)
    const [taskTitle, setTaskTitle] = useState(task.title || '')
    const { updateTask } = useTask()

    function handleEditTask() {
        setIsEditing(true);
    }

    function handleExitEditTask() {
        setIsEditing(false)
    }

    function handleChangeTaskTitle(e: ChangeEvent<HTMLInputElement>) {
        setTaskTitle(e.target.value || '')
    }

    function handleSaveTask(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        updateTask(task.id, { title: taskTitle })
        setIsEditing(false)
    }

    return (
        <Card size='md' >
            {!isEditing ?
                <div className="flex items-center gap-4">
                    <InputCheckbox
                        value={task?.concluded?.toString()}
                        checked={task.concluded}
                    />
                    <Text className={cx("flex-1", { 'line-through': task?.concluded }
                    )}>
                        {task?.title}
                    </Text>
                    <div className="flex gap-1">
                        <ButtonIcon icon={TrashIcon} variant='tertiary' />
                        <ButtonIcon icon={PencilIcon} variant='tertiary' onClick={handleEditTask} />
                    </div>
                </div>
                :
                <form className="flex items-center gap-4" onSubmit={handleSaveTask}>
                    <InputText
                        value={taskTitle}
                        className="flex-1"
                        onChange={handleChangeTaskTitle}
                        required
                        autoFocus
                    />
                    <div className="flex gap-1">
                        <ButtonIcon
                            type="button"
                            icon={XIcon}
                            variant='secondary'
                            onClick={handleExitEditTask}
                        />
                        <ButtonIcon
                            type='submit'
                            icon={CheckIcon}
                            variant='primary'
                        />
                    </div>
                </form>
            }
        </Card>

    )
}