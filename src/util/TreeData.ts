export default class TreeData {
    static bindTreeData(list, id, pid) {
        debugger
        if (!id || !pid) {
            return null;
        }
        let id2Vo: any = {};
        list.forEach(element => {
            if (element[id] == null) {
                return null;
            }
            id2Vo[element[id]] = element;
        });
        let children = "children";
        let currentPid;
        for (let i = 0; i < list.length; i++) {
            currentPid = list[i][pid];
            if (id2Vo[currentPid]) {
                if (!id2Vo[currentPid][children]) {
                    id2Vo[currentPid][children] = [];
                }
                id2Vo[currentPid][children].push(list[i]);
                list.splice(i, 1);
                i--;
            }
        }
        id2Vo = null;
        return null;
    }
}