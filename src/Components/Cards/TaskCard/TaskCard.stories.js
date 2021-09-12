import React from "react";
import TaskCard from "./TaskCard";

export default {
    component: TaskCard,
    title: 'Component/Card/TaskCard',
    argTypes: {
        name: {
            name: 'task name',
            defaultValue: "Study at Home",
            control: {
                type: 'text'
            }
        },
        description: {
            name: 'task description',
            defaultValue: "Just do the thing quickly and I can get reward to my self with ice cream",
            control: {
                type: 'text'
            }
        },
        groupColor: {
            name: 'grouping color',
            defaultValue: 'purple',
            control: {
                type: 'color'
            }
        },
        taskData: {
            table: {disable: true}
        }
    }
}

const Template = (args) => {
    const { name, description, groupColor } = args;
    const taskData = {
        name: name,
        description : description,
        group: {
            title: 'school',
            color: groupColor
        }
    }
    return(
        <TaskCard taskData={taskData} />
    )
}

export const Expanded = Template.bind({});
export const Minimal = Template.bind({});

Minimal.args = {
    description: '',
}