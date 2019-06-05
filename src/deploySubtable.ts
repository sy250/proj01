export function deploySubtable(subtable: any) {
    // const arrayTable = [1, 2, 3];
    const arrayTable = getValue(subtable);
    // return 'Hello World!';
    return arrayTable;
}

export function getValue(subtable: any) {
    // const key = 'value';
    return subtable['value'];
}
  
export default {deploySubtable, getValue};

const HANDLE_EVENT_CREATE_SHOW = 'app.record.create.show';
interface KintoneEvent {
    record: kintone.types.Fields;
}
kintone.events.on(HANDLE_EVENT_CREATE_SHOW, (event: KintoneEvent) => {
    console.log(event);
    event.record.borrowLib.value = '駅前分室';
    event.record.Table.value[0].value.no.value = '1';
    return event;
});

const HANDLE_EVENT_CREATE = ['app.record.create.submit', 'app.record.edit.submit'];
kintone.events.on(HANDLE_EVENT_CREATE, (event: KintoneEvent) => {
    console.log(event);
    // console.log(deploySubtable(event.record.Table));
    let arrayTable = deploySubtable(event.record.Table);
    window.alert(arrayTable.length);
    // event.record.borrowLib.value = '駅前分室';
    // event.record.Table.value[0].value.no.value = '1';
    return event;
});
