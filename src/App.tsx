import { Text } from "./components/Text";
import TrashIcon from "./assets/icons/trash.svg?react"
import CheckIcon from "./assets/icons/check.svg?react"
import PencilIcon from "./assets/icons/pencil.svg?react"
import PlusIcon from "./assets/icons/plus.svg?react"
import SpinnerIcon from "./assets/icons/spinner.svg?react"
import XIcon from "./assets/icons/x.svg?react"
import { Icon } from "./components/Icon";
import { Badge } from "./components/Badge";
import { Button } from "./components/Button";
import { ButtonIcon } from "./components/ButtonIcon";
import { InputText } from "./components/InputText";
import { InputCheckbox } from "./components/InputCheckbox";
import { Card } from "./components/Card";

export function App() {

  return (
    <div className="grid gap-5">
      <div className="flex flex-col gap-1">
        <Text variant="body-sm-bold" className="text-pink-base">Olá mundo</Text>
      </div>
      <div className="flex gap-1">
        <Icon svg={TrashIcon} className="" />
        <Icon svg={CheckIcon} className="" />
        <Icon svg={PencilIcon} className="" />
        <Icon svg={PlusIcon} className="" />
        <Icon svg={SpinnerIcon} className="" animate />
        <Icon svg={XIcon} className="" />
      </div>
      <div>
        <Badge>5</Badge>
        <Badge variant='secondary'>5</Badge>
        <Badge variant='primary'>5</Badge>
      </div>
      <div>
        <Button icon={XIcon}>Nova tarefa</Button>
      </div>
      <div>
        <ButtonIcon icon={TrashIcon} />
        <ButtonIcon icon={TrashIcon} variant='secondary' />
        <ButtonIcon icon={TrashIcon} variant='tertiary' />
      </div>
      <div>
        <InputText></InputText>
      </div>
      <div>
        <InputCheckbox />
      </div>
      <div><Card size='md'>Olá mundo</Card></div>
    </div>
  )

}


