module Api
  class TasksController < ApiController
    before_action :set_task, only: %i[ show edit update destroy ]

    def index
      @tasks = Task.all
    end

    def show; end
    def edit; end
    def update; end
    def destroy; end

    private
      def set_task
        @task = Task.find(params[:id])
      end

  end
end