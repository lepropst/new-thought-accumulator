type JSONValue =
| string
| number
| boolean
| { [x: string]: JSONValue }
| Array<JSONValue>;

interface JSONObject {
    [x: string]: JSONValue;
}
    
export default async function JSONRenderer(json: JSONObject) {

}