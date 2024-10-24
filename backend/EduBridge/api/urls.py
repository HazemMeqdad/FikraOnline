from django.urls import path
from .views import *
from django.urls import re_path
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi


schema_view = get_schema_view(
    openapi.Info(
        title="Snippets API",
        default_version="v1",
        description="Test description",
        contact=openapi.Contact(email="alrefa3ee.abd@gmail.com"),
    ),
    public=False,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path(
        "swagger<format>/", schema_view.without_ui(cache_timeout=0), name="schema-json"
    ),
    path(
        "swagger/",
        schema_view.with_ui("swagger", cache_timeout=0),
        name="schema-swagger-ui",
    ),
    path("redoc/", schema_view.with_ui("redoc", cache_timeout=0), name="schema-redoc"),
    path("token/", ObtainTokenPairView.as_view(), name="token_obtain_pair"),
    path("token/refresh/", TokenRefreshCustomView.as_view(), name="token_refresh"),
    path("testToken/", TestToken.as_view(), name="test_token"),
    path("teachers/create/", TeacherCreateView.as_view(), name="teacher-create"),
    path("teachers/", TeachersList.as_view(), name="get_teachers"),
    path("teachers/<int:id>", getTeacher, name="get_teacher"),
    path("students/create/", StudentCreateView.as_view(), name="student-create"),
]
