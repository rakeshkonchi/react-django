from rest_framework.response import Response
from rest_framework.decorators import api_view
from studentapp.serializers import StudentSerializer
from studentapp.models import Student

@api_view(["POST"])
def addStudent(request):
    serializers = StudentSerializer(data = request.data)
    if serializers.is_valid():
        serializers.save()
        return Response(serializers.validated_data)
    else:
        return Response(serializers.errors())

@api_view(["GET"])
def viewStudents(request):
    userdata = Student.objects.all()
    serializers = StudentSerializer(userdata,many=True)
    return Response(serializers.data)

@api_view(["GET"])
def fetchStudent(request,id):
    try:
        userdata = Student.objects.get(id = id)
    except Exception as e:
        return Response({"message":"Student Not Found"})
    serializers = StudentSerializer(userdata)
    return Response(serializers.data)

@api_view(["PUT"])
def updateStudent(request,id):
    try:
        student = Student.objects.get(id = id)
    except Exception as e:
        return Response({"message":"student not found"})
    
    serializers = StudentSerializer(student, data = request.data)
    if serializers.is_valid():
        serializers.save()
        return Response(serializers.validated_data)
    else:
        return Response(serializers.errors())

@api_view(["DELETE"])

def deleteStudent(request,id):
    try:
        student = Student.objects.get(id = id)
    except Exception as e:
        return Response({"message":"student not found"})
    student.delete()
    return Response({"message":"Student Deleted Successfully"})

