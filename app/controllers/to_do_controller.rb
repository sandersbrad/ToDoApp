class ToDoController < ApplicationController

  def index
    @todos = ToDo.all

    render json: @todos
  end

  def show
    @todo = ToDo.find(params[:id])

    render json: @todo
  end

  def create
    @todo = Todo.new(todo_params)

    if @todo.save
      render :index
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def edit
    @todo = Todo.find(params[:id])

    @todo.update_attributes(todo_params)

    if @todo.save
      render :index
    else
      flash.now[:errors] = @user.errors.full_messages
      render :edit
    end
  end

  def destroy
    @todo = Todo.find(params[:id])
    @todo.destroy
    render :index
  end

  private

  def todo_params
    params.require(:property).permit(:title, :description, :date)
  end

end
