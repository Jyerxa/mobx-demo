import {Button, Card} from 'semantic-ui-react';
import styles from '../Gadget/Gadget.module.css';
import {useStore} from '../../stores/store';
import {observer} from 'mobx-react-lite';

const Widget = () => {
    // use store and destructure required properties
    const {itemStore} = useStore();
    const {gadgetCount, widgetCount, addWidget, removeWidget} = itemStore

    return(
        <Card className={styles.card}>
            <Card.Content>
                <Card.Header>Widget Side Info</Card.Header>
                <Card.Description>
                    <p>The Gadget Count is: { gadgetCount } </p>
                    <p>The Widget Count is: { widgetCount } </p>
                    <p>Look MA! No Props!!!</p>
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button onClick={ addWidget } basic color='green'>Add Widget</Button>
                <Button onClick={ removeWidget } basic color='red' >Remove Widget</Button>
            </Card.Content>
        </Card>
    )
}

export default observer(Widget);
