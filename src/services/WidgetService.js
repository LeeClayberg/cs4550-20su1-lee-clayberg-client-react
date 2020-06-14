
const findWidgetsForTopic = (lessonId) =>
    fetch(`https://cs4550-20sm1-clayberg-server.herokuapp.com/api/topics/${lessonId}/widgets`)
        .then(response => response.json())

const deleteWidget = (widgetId) => {
    return fetch(`https://cs4550-20sm1-clayberg-server.herokuapp.com/api/widgets/${widgetId}`, {
        method: 'DELETE'
    })
        .then(response => response.json())
}

const updateWidget = (widgetId, widget) =>
    fetch(`https://cs4550-20sm1-clayberg-server.herokuapp.com/api/widgets/${widgetId}`, {
        method: 'PUT',
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const createWidget = (topicId, newWidget) =>
    fetch(`https://cs4550-20sm1-clayberg-server.herokuapp.com/api/topics/${topicId}/widgets`, {
        method: 'POST',
        body: JSON.stringify(newWidget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const findAllWidgets = () =>
    fetch(`https://cs4550-20sm1-clayberg-server.herokuapp.com/api/widgets`)
        .then(response => response.json())

const findWidgetById = (widgetId) =>
    fetch(`https://cs4550-20sm1-clayberg-server.herokuapp.com/api/widgets/${widgetId}`)
        .then(response => response.json())

export default {
    findWidgetsForTopic,
    deleteWidget,
    updateWidget,
    createWidget,
    findAllWidgets,
    findWidgetById
}