module Api
  class TasksController < ApiController
    skip_before_action :verify_authenticity_token
    before_action :set_task, only: %i[ show update destroy ]

    def index
      @tasks = Task.all
    end

    def show; end
    
    def update
      respond_to do |format|
        if @task.update(task_params)
          format.json { render :show, status: :ok }
        else
          format.json { render json: @task.errors, status: :bad_request }
        end
      end
    end
    
    def new
    end

    def created
    end

    def destroy
    end

    private
      def set_task
        @task = Task.find(params[:id])
      end

      def task_params
        params.require(:task).permit(:name, :description, :completed_at, :complete)
      end
  end
end