from django.shortcuts import render
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .models import Teacher, Student
from django.core import serializers
from django.http import JsonResponse
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import TeacherSerializer, StudentSerializer
import json


class TeacherCreateView(generics.CreateAPIView):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer


class TeachersList(generics.ListAPIView):
    serializer_class = TeacherSerializer

    def get(self, request, format=None):
        teachers = Teacher.objects.all()
        return Response(teachers)


@api_view(["GET"])
def getTeacher(request, id):
    try:
        teacher = Teacher.objects.get(id=id)
    except Teacher.DoesNotExist:
        return JsonResponse({"error": "Teacher not found"}, status=404)
    serialized_teacher = serializers.serialize(
        "json",
        [
            teacher,
        ],
    )
    serialized_teacher = json.loads(serialized_teacher)[0]["fields"]
    return Response(serialized_teacher)


class StudentCreateView(generics.CreateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer


# Token obtain and refresh views
class ObtainTokenPairView(TokenObtainPairView):
    pass


class TokenRefreshCustomView(TokenRefreshView):
    pass


class TestToken(generics.GenericAPIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        return Response(data={"message": "Token is valid" }, status=200)
    

