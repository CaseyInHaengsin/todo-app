json.task do
  json.id @task.id
  json.name @task.name
  json.description @task.description
  json.created_at @task.created_at
  json.updated_at @task.updated_at
  json.completed_at @task.completed_at
  json.complete @task.complete
end