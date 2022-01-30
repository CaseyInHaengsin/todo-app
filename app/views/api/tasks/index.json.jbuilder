json.tasks do
  json.array! @tasks do |t|
    json.id t.id
    json.name t.name
    json.description t.description
    json.created_at t.created_at
    json.updated_at t.updated_at
    json.completed_at t.completed_at
    json.complete t.complete
  end
end