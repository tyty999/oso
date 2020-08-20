import { Expense, EXPENSES } from './expense';
import { Oso } from 'oso';
import * as http from 'http';

const oso: Oso = new Oso();
oso.loadFile(__dirname + "/expenses.polar");
oso.registerClass(Expense);

const server = http.createServer(async function (req, res) {
    const actor = req.headers["user"]!;
    const action = req.method!;

    const [_,  resourceType, resourceId ] = req.url!.split("/");

    const resource = EXPENSES[Number.parseInt(resourceId)];
    if (resourceType !== "expenses" || !resource) {
        res.write("Not Found!");
    } else if (await oso.isAllowed(actor, action, resource)) {
        res.write(resource.toString());
    } else {
        res.write("Not Authorized!")
    }
    res.end();
});

console.log("running on port 5000");
server.listen(5000);

