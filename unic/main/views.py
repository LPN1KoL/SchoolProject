import json
import requests
from django.http import FileResponse, JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings



def main(request):
    return render(request, 'main.html')


def favicon(request):
    return FileResponse(open('static/imgs/logo.svg', 'rb'))


@csrf_exempt
def submit_form(request):
    if request.method == 'POST':
        data = json.loads(request.body)

        # Извлекаем ответы на вопросы
        question1 = data.get('question1', '')
        question2 = data.get('question2', '')
        question3 = data.get('question3', '')
        question4 = data.get('question4', '')
        question5 = data.get('question5', '')
        text_question1 = data.get('text-question1', '')
        text_question2 = data.get('text-question2', '')
        text_question3 = data.get('text-question3', '')
        text_question4 = data.get('text-question4', '')
        text_question5 = data.get('text-question5', '')

        return JsonResponse({
            'success': True,
            'message': 'Форма успешно отправлена.'
        }, status=200)
