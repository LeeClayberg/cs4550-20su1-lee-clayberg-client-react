const findTopicsForLesson = (lessonId) =>
    fetch(`https://cs4550-20sm1-clayberg-server.herokuapp.com/api/lessons/${lessonId}/topics`)
        .then(response => response.json())

const deleteTopic = (topicId) => {
    return fetch(`https://cs4550-20sm1-clayberg-server.herokuapp.com/api/topics/${topicId}`, {
        method: 'DELETE'
    })
        .then(response => response.json())
}

const updateTopic = (topicId, topic) =>
    fetch(`https://cs4550-20sm1-clayberg-server.herokuapp.com/api/topics/${topicId}`, {
        method: 'PUT',
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const createTopic = (lessonId, newTopic) =>
    fetch(`https://cs4550-20sm1-clayberg-server.herokuapp.com/api/lessons/${lessonId}/topics`, {
        method: 'POST',
        body: JSON.stringify(newTopic),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const findTopicById = (topicId) =>
    fetch(`https://cs4550-20sm1-clayberg-server.herokuapp.com/api/topics/${topicId}`)
        .then(response => response.json())

export default {
    findTopicsForLesson,
    deleteTopic,
    updateTopic,
    createTopic,
    findTopicById
}
