module Api
  class TasksController < ApiController
    skip_before_action :verify_authenticity_token
    before_action :require_login
    before_action :set_task, only: %i[ show update destroy ]
    before_action :check_user, only: %i[ show update destroy ]

    def index
      @tasks = @user.tasks
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

    def create
      @task = @user.tasks.new(task_params)
      respond_to do |format|
        if @task.save
          format.json { render :show, status: :created }
        else
          format.json { render json: @task.errors, status: :bad_request }
        end
      end
    end

    def destroy
      respond_to do |format|
        if @task.destroy
          format.json { render json: @task, status: :accepted }
        else
          format.json { render json: @task.errors, status: bad_request }
        end
      end
    end

    private
      def set_task
        @task = Task.find(params[:id])
      end

      def task_params
        params.require(:task).permit(:name, :description, :completed_at, :complete, :user_id)
      end

      def check_user
        render json: {"error":"you don't own that task"}, status: :forbidden unless @task.user == @user
      end
  end
end