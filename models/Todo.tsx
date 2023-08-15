import { BaseThought } from "./BaseThought";

export interface TodoThought extends BaseThought {
    dateDue: Date;
    content: String;
    prerequisites: TodoThought[]
}