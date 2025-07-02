from api_utils import API, run, NotFound, UnprocessableEntity, PubSub

api = API()

broker = PubSub()

messages = [
    {"sender": "piotr", "receiver": "", "content": "", "type": "new-user"},
    {"sender": "isa", "receiver": "", "content": "", "type": "new-user"},
    {"sender": "isa", "receiver": "piotr", "content": "hallo piotr", "type": "message"},
]

@api.GET("/api/chat/")
def list_messages():
    return messages

@api.POST("/api/chat/")
def post_message(sender:str, receiver:str="", content:str="", type:str="message"):
    msg = {"sender": sender, "receiver": receiver, "content": content, "type": type}
    messages.append(msg)
    broker.publish("message", msg)

@api.GET("/api/chat/stream")
def message_stream(request):
    return broker.streaming_response(request)

run(api, port=5000)
