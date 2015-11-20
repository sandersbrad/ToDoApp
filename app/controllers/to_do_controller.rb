class ToDoController < ApplicationController

  def index
    @todos = ToDo.all

    render json: @todos
  end

  def show
    fail
    @todo = ToDo.find(params[:id])

    render json: @todo
  end

  def create
    @todo = ToDo.new(todo_params)

    if @todo.save
      render :index
    else
      flash.now[:errors] = @todo.errors.full_messages
      render :index
    end
  end

  def update
    @todo = ToDo.find(params[:id])

    @todo.update_attributes(todo_params)

    if @todo.save
      render :index
    else
      flash.now[:errors] = @user.errors.full_messages
      render :edit
    end
  end

  def destroy
    @todo = ToDo.find(params[:id])
    @todo.destroy
    render :index
  end

  private

  def todo_params
    params.require(:to_do).permit(:title, :description, :date)
  end

end
