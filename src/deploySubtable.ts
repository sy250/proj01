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

const HANDLE_EVENT = 'app.record.create.show';
interface KintoneEvent {
    record: kintone.types.Fields;
}
kintone.events.on(HANDLE_EVENT, (event: KintoneEvent) => {
    // event.record.Number.value = "1";
    // event.record.Table.value[0].value.Number_Table.value = "1";
    console.log(event);
    event.record.borrowLib.value = '駅前分室';
    event.record.Table.value[0].value.no.value = '1';
});
