import { Course } from "src/course/course.entity";
import { Lesson } from "src/lesson/lesson.entity";
import { Module } from "src/module/module.entity";
import { User } from "src/user/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserProgress {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    user_id: number;

    @ManyToOne(() => User, (user) => user.progress)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @Column({ nullable: true })
    course_id: number;

    @ManyToOne(() => Course, (course) => course.progress)
    @JoinColumn({ name: 'course_id' })
    course: Course;

    @Column({ nullable: true })
    module_id: number;

    @ManyToOne(() => Module, (module) => module.progress)
    @JoinColumn({ name: 'module_id' })
    module: Module;

    @Column({ nullable: true })
    lesson_id: number;

    @ManyToOne(() => Lesson, (lesson) => lesson.progress)
    @JoinColumn({ name: 'lesson_id' })
    lesson: Lesson;

    @Column({ default: false })
    completed: boolean;

    @Column({ type: 'timestamp', nullable: true })
    completed_at: Date;
}