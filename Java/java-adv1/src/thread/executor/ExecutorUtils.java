package thread.executor;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.ThreadPoolExecutor;

import static util.MyLogger.log;

public abstract class ExecutorUtils {
    public static void printState(ExecutorService executorService) {
        if(executorService instanceof ThreadPoolExecutor poolExecutor) {
            // int pool = poolExecutor.getCorePoolSize(); // 설정된 고정 최소 쓰레드 수
            int pool = poolExecutor.getPoolSize(); // 현재 풀에 살아 있는 전체 쓰레드 수
            int active = poolExecutor.getActiveCount();
            int queuedTasks = poolExecutor.getQueue().size();
            long completedTask = poolExecutor.getCompletedTaskCount();
            log("[pool=" + pool + ", active=" + active + ", queuedTasks" + queuedTasks +
                    ", completedTasks=" + completedTask + "]");
        } else {
            log(executorService);
        }
    }

    public static void printState(ExecutorService executorService, String taskName) {
        if(executorService instanceof ThreadPoolExecutor poolExecutor) {
            // int pool = poolExecutor.getCorePoolSize(); // 설정된 고정 최소 쓰레드 수
            int pool = poolExecutor.getPoolSize(); // 현재 풀에 살아 있는 전체 쓰레드 수
            int active = poolExecutor.getActiveCount();
            int queuedTasks = poolExecutor.getQueue().size();
            long completedTask = poolExecutor.getCompletedTaskCount();
            log(taskName + " -> [pool=" + pool + ", active=" + active + ", queuedTasks" + queuedTasks +
                    ", completedTasks=" + completedTask + "]");
        } else {
            log(executorService);
        }
    }
}
