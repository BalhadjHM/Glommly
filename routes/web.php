<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;

// Guest routes
Route::get('/login', [UserController::class, 'login'])->name('login');
Route::get('/signup', [UserController::class, 'signup']);
Route::post('/signup', [UserController::class, 'register']);
Route::post('/login', [UserController::class, 'authenticate']);

// Authenticated routes
Route::middleware(['auth'])->group(function () {
    // Logout route
    Route::get('/logout', [UserController::class, 'logout']);
    // Post routes
    Route::get('/', [PostController::class, 'index']);
    Route::get('/posts/create', [PostController::class, 'create']);
    Route::post('/posts', [PostController::class, 'store']);
    Route::get('/posts/{post}', [PostController::class, 'show']);
    Route::get('/posts/{post}/edit', [PostController::class, 'edit']);
    Route::put('/posts/{post}', [PostController::class, 'update']);
    Route::delete('/posts/{post}', [PostController::class, 'destroy']);
    // User routes
    Route::get('/users/{user}', [UserController::class, 'show']);
    Route::get('/users', [UserController::class, 'profile']);
    Route::get('/settings', [UserController::class, 'edit']);
    Route::post('/settings/{user}', [UserController::class, 'update']);
    Route::delete('/users/{user}', [UserController::class, 'destroy']);
});

