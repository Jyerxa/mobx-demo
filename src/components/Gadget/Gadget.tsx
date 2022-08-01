import {Button, Card} from 'semantic-ui-react';
import styles from './Gadget.module.css'
import {useStore} from '../../stores/store';
import {observer} from 'mobx-react-lite';

const Gadget = () => {
    // use store and destructure required properties
    const {itemStore} = useStore();
    const {gadgetCount, widgetCount, addGadget, removeGadget} = itemStore


    return (
        <Card className={styles.card}>
            <Card.Content>
                <Card.Header>Gadget Side Info</Card.Header>
                <Card.Description>
                    <p>The Gadget Count is: { gadgetCount } </p>
                    <p>The Widget Count is: { widgetCount } </p>
                    <p>Look MA! No Props!!!</p>
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button onClick={addGadget} basic color='green'>Add Gadget</Button>
                <Button onClick={removeGadget} basic color='red' >Remove Gadget</Button>
            </Card.Content>
        </Card>
    )
}

export default observer(Gadget);
