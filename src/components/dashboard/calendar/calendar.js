import {NextIcon, PrevIcon} from '@/components/vectors'
import styles from '@/styles/dashboard/calendar.module.sass'

export default function MainCalendar() {
    return (
        <>
            <div className={styles.calendar}>
                <div className={styles.top}>
                    <div className={styles.heading}>
                        <div className={styles.controls}>
                            <button className={styles.control}>
                                <PrevIcon/>
                            </button>
                            <button className={styles.control}>
                                <NextIcon/>
                            </button>
                        </div>
                        <div className={styles.date}>
                            20-26 Mart, 2023
                        </div>
                    </div>
                    <div className={styles.todayButton}>
                        <button>Bugün</button>
                    </div>
                </div>
                <div className={styles.calendarTable}>
                    <div className={styles.header}>
                        <ul>
                            <li>
                                <span>PZT</span>
                                <h3>20</h3>
                            </li>
                            <li>
                                <span>SAL</span>
                                <h3>21</h3>
                            </li>
                            <li>
                                <span>ÇRŞ</span>
                                <h3>22</h3>
                            </li>
                            <li>
                                <span>PRŞ</span>
                                <h3>23</h3>
                            </li>
                            <li>
                                <span>CUM</span>
                                <h3>24</h3>
                            </li>
                            <li>
                                <span>CMT</span>
                                <h3>25</h3>
                            </li>
                            <li className={styles.activeDay}>
                                <span>PZR</span>
                                <h3>26</h3>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.rows}>
                        <ul>
                            {(() => {
                                const result = []
                                for (let i = 0; i < 7 * 24; i++)
                                    result.push(
                                        <li key={i} style={{['--time']: i % 7 === 0 ? `"${i / 7 < 10 ? '0' : ''}${i / 7}:00"` : ''}}></li>
                                    )
                                return result
                            })()}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}