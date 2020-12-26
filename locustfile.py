from locust import HttpLocust, TaskSet, task
import json

class TestBehavior(TaskSet):

    def on_start(self):
        response = self.client.post("/auth", {"email": "sergio@correo.com", "password": "123"})
        print(response.json())
        self.accessToken = response.json()["accessToken"]

    @task(3)
    def list_medics(self):
        self.client.get("/medics", headers={"Authorization": "Bearer {}".format(self.accessToken)})

    @task(1)
    def list_roles(self):
        self.client.get("/roles", headers={"Authorization": "Bearer {}".format(self.accessToken)})

class TestBehaviorProfile(TaskSet):

    def on_start(self):
        response = self.client.post("/auth", {"email": "sergio@correo.com", "password": "123"})
        print(response.json())
        self.accessToken = response.json()["accessToken"]

    @task(5)
    def list_roles(self):
        self.client.get("/users", headers={"Authorization": "Bearer {}".format(self.accessToken)})

    @task(2)
    def list_roles(self):
        self.client.get("/health-check")


class Stress(HttpLocust):
    task_set = TestBehavior
    min_wait = 2000
    max_wait = 5000

class StressProfile2(HttpLocust):
    task_set = TestBehaviorProfile
    min_wait = 3000
    max_wait = 8000