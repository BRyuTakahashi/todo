import { Container } from "../components/Container";
import { TasksSumary } from "../core-components/TasksSumary";
import { TasksList } from "../core-components/TasksList";

export function PageHome() {
    return (
        <Container as="article" className="space-y-3">
            <header className="flex items-center justify-between">
                <TasksSumary />
            </header>
            <TasksList />
        </Container>
    )
}