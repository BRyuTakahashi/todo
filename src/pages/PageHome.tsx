import { Container } from "../components/Container";
import { TasksSumary } from "../core-components/TasksSumary";
import { TaskItem } from "../core-components/TaskItem";

export function PageHome() {
    return (
        <Container as="article" className="space-y-3">
            <header className="flex items-center justify-between">
                <TasksSumary />
            </header>

            <TaskItem />
        </Container>
    )
}